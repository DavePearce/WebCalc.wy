import std::ascii
import std::math

import js::core with string 
import web::html
import web::io
import click, style from web::html
import button, div, h1 from web::html
import Event, MouseEvent from web::html

type Node is html::Node<State>
type Action is io::Action<State>

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
    Action[] as
    // Dxecute previous operation (if any)
    (s,as) = execute(s)
    // Setup next operation
    s.mode = mode
    // Done
    return s

// Execute the current operation
function execute(State s) -> (State r, Action[] as):
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
    return s,[]

// Clear the current operation and operands
function clear(State s) -> (State r, Action[] as):
    //
    s.accumulator = 0
    s.current = null
    s.mode = ADD
    //
    return s,[]

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

type Transformer is function(State)->(State,Action[])
final Transformer ADDER = &(State s -> (push(ADD,s),[]))
final Transformer SUBTRACTER = &(State s -> (push(SUBTRACT,s),[]))
final Transformer MULTIPLIER = &(State s -> (push(MULTIPLY,s),[]))
final Transformer DIVIDER = &(State s -> (push(DIVIDE,s),[]))

// =========================================
// View
// =========================================

final string BUTTON_STYLE = "background-color: #4CAF50; color: white; border: none; padding: 15px 32px; display: inline-block; font-size: 16px;"

function button(string label, Transformer fn) -> Node:
    // construct button
    return html::button([
        style(BUTTON_STYLE),
        click(&(MouseEvent e, State s -> fn(s)))
    ],label)

function numeric(int value) -> Node:
    // construct label
    string label = (string) ascii::to_string(value)
    // construct button
    return button(label,&(State s -> (enter(value,s),[])))

function view(State s) -> Node:
    int current
    // Normalise current value
    if s.current is null:
        current = s.accumulator
    else:
        current = s.current
    // Construct display
    return div([
        // Display
        h1((string) ascii::to_string(current)),
        // Top row
        div([numeric(7),numeric(8),numeric(9),button("/",DIVIDER)]),
        // Middle row
        div([numeric(4),numeric(5),numeric(6),button("*",MULTIPLIER)]),
        // Bottom row
        div([numeric(1),numeric(2),numeric(3),button("+",ADDER)]),
        // Operator Row
        div([button("C",&clear),numeric(0),button("=",&execute),button("-",SUBTRACTER)])
    ])

// =========================================
// Application
// =========================================

public export function main()->io::App<State>:
    State state = { current: null, accumulator: 0, mode: ADD }
    return {
        // Initial state
        model: state,
        // View Transformer
        view: &view
    }
