import std::ascii
import std::math

import w3c::dom
import w3c::html
import App from w3c::app
import Node from w3c::html
import onClick from w3c::html
import h1 from w3c::html
import div from w3c::html
import style from w3c::html
import button from w3c::html
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

function execute(State s) -> (State r):
    // FIXME: following is workaround
    int|null c = s.current
    //
    if c is int:
        switch(s.mode):
            case 0:
                s.accumulator = s.accumulator + c
            case 1:
                s.accumulator = s.accumulator - c
            case 2:
                s.accumulator = s.accumulator * c
            case 3:
                s.accumulator = s.accumulator / c
    // reset operand
    s.current = null
    //
    return s

function clear(State s) -> (State r):
    //
    s.accumulator = 0
    s.current = null
    s.mode = ADD
    //
    return s

function enter(int digit, State s) -> (State r):
    // FIXME: following is workaround
    int|null c = s.current
    //
    if c is null:
        s.current = digit
    else:
        s.current = (10 * c) + digit
    // Done
    return s

// =========================================
// Transformers
// =========================================

public type Transformer is function(State)->(State)

public final Transformer ADDER = &(State s -> push(0,s))
public final Transformer SUBTRACTER = &(State s -> push(1,s))
public final Transformer MULTIPLIER = &(State s -> push(2,s))
public final Transformer DIVIDER = &(State s -> push(3,s))

// =========================================
// View
// =========================================

final ascii::string BUTTON_STYLE = "background-color: #4CAF50; color: white; border: none; padding: 15px 32px; display: inline-block; font-size: 16px;"

function button(ascii::string label, Transformer fn) -> Node<State>:
    // construct button
    return html::button<State>([
        style<State>(BUTTON_STYLE),
        onClick(&(MouseEvent e, State s -> fn(s)))
    ],[label])

function numeric(int value) -> Node<State>:
    // construct label
    ascii::string label = ascii::to_string(value)
    // construct button
    return button(label,&(MouseEvent e, State s -> enter(value,s)))

function view(State s) -> Node<State>:
    int current
    // Normalise current value
    if s.current is null:
        current = s.accumulator
    else:
        current = s.current
    // Construct display
    return div<State>([
        // Display
        h1<State>(ascii::to_string(current))
        // Top row
        // div<State>([numeric(7),numeric(8),numeric(9),button("/",DIVIDER)]),
        // // Middle row
        // div<State>([numeric(4),numeric(5),numeric(6),button("*",MULTIPLIER)]),
        // // Bottom row
        // div<State>([numeric(1),numeric(2),numeric(3),button("+",ADDER)]),
        // // Operator Row
        // div<State>([button("C",&clear),numeric(0),button("=",EXEC),button("-",SUBTRACTER)])
    ])

// =========================================
// Application
// =========================================

public export function main()->App<State>:
    return {
        // Initial state
        model: { current: null, accumulator: 0, mode: 0 },
        // View Transformer
        view: &view
    }
