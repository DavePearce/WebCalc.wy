import std::ascii
import std::math

import w3c::dom
import w3c::html
import App from w3c::app
import Node from w3c::html
import style from w3c::html
import click from w3c::html
import element from w3c::html
import MouseEvent from w3c::html
import Event from w3c::html

// =========================================
// Model
// =========================================

final int ADD = 0
final int SUBTRACT = 1
final int MULTIPLY = 2
final int DIVIDE = 3

public type State is {
    int mode,
    int|null current,
    int accumulator
}

function push(int mode, State s) -> (State r):
    // Dxecute previous operation (if any)
    s = execute(s)
    // Setup next operation
    s.mode = mode
    // Done
    return s

// Execute the current operation
function execute(State s) -> (State r):
    //
    if s.current is int:
        switch(s.mode):
            case ADD:
                s.accumulator = s.accumulator + s.current
            case SUBTRACT:
                s.accumulator = s.accumulator - s.current
            case MULTIPLY:
                s.accumulator = s.accumulator * s.current
            case DIVIDE:
                s.accumulator = s.accumulator / s.current
    // reset operand
    s.current = null
    //
    return s

// Clear the current operation and operands
function clear(State s) -> (State r):
    //
    s.accumulator = 0
    s.current = null
    s.mode = ADD
    //
    return s

// Enter a digit into the current operand being construct.
function enter(int digit, State s) -> (State r):
    //
    if s.current is null:
        s.current = digit
    else:
        s.current = (10 * s.current) + digit
    // Done
    return s

// =========================================
// Transformers
// =========================================

public type Transformer is function(State)->(State)
public final Transformer ADDER = &(State s -> push(ADD,s))
public final Transformer SUBTRACTER = &(State s -> push(SUBTRACT,s))
public final Transformer MULTIPLIER = &(State s -> push(MULTIPLY,s))
public final Transformer DIVIDER = &(State s -> push(DIVIDE,s))

// =========================================
// View
// =========================================

final ascii::string BUTTON_STYLE = "background-color: #4CAF50; color: white; border: none; padding: 15px 32px; display: inline-block; font-size: 16px;"

function button(ascii::string label, Transformer fn) -> Node<State>:
    // construct button
    return element<State>("button",[
        style<State>(BUTTON_STYLE),
        click(&(MouseEvent e, State s -> fn(s)))
    ],label)

function numeric(int value) -> Node<State>:
    // construct label
    ascii::string label = ascii::to_string(value)
    // construct button
    return button(label,&(State s -> enter(value,s)))

function view(State s) -> Node<State>:
    int current
    // Normalise current value
    if s.current is null:
        current = s.accumulator
    else:
        current = s.current
    // Construct display
    return element<State>("div",[
        // Display
        element<State>("h1",ascii::to_string(current)),
        // Top row
        element<State>("div",[numeric(7),numeric(8),numeric(9),button("/",DIVIDER)]),
        // Middle row
        element<State>("div",[numeric(4),numeric(5),numeric(6),button("*",MULTIPLIER)]),
        // Bottom row
        element<State>("div",[numeric(1),numeric(2),numeric(3),button("+",ADDER)]),
        // Operator Row
        element<State>("div",[button("C",&clear),numeric(0),button("=",&execute),button("-",SUBTRACTER)])
    ])

// =========================================
// Application
// =========================================

public export function main()->App<State>:
    return {
        // Initial state
        model: { current: null, accumulator: 0, mode: ADD },
        // View Transformer
        view: &view
    }
