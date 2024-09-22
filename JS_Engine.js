
/*
Q. What is JavaScript Runtime Environment(JRE)?

A.  JRE is an environment in which the JS code is run.
    It contains everything that is required to run a JS program.
    It consists of:
        JS Engine 
        Web APIs
        Callback Queue
        Microtask Queue
        Event Loop

    Browser has its own JRE to run the JS code and Node.js has its own JRE to run the JS code on the server.

Q. What is a JS Engine?
A. 
JS Engine is the heart of JRE where the JS code is computed and executed.
It is responsible for parsing, compiling, and executing the JS code.
Different JS Engines:
    V8 - Google
    Spider Monkey - Mozilla Firefox
First JS Engine was made by Brendan Eich as Spider Monkey, used in Mozilla Firefox today.


Q. Three phases of JS Engine?
A. 
1. Parsing: JS Engine reads the high-level source code and breaks it into tokens.(Abstract Syntax Tree)
2. Compilation: JS Engine converts the tokens(AST) into bytecode.
3. Execution: JS Engine executes the bytecode.


Q. What is the difference between Interpreter and Compiler?
A.

Interpreter takes the high-level source code and starts executing line by line straight away. (MORE SPEED)

Compiler compiles the entire source code before executing and then converts it into an intermediate optimized code and then executed.(MORE EFFICIENT)


Q. Is JS an interpreted-language or compiled-language?

A.  JS is a JIT compiled Language(Just-In-Time).
    Initially, it was made as interpreted language but now, most modern browsers uses JIT Compilation technique.
    It uses both interpreter and compiler.
    The AST, after parsing phase, moves to the interpreter.
    Interpreter converts the AST into bytecode , which is ready to be executed and the compiler optimizes the bytecode at RUNTIME.



Q. How JS Engine works?

A.
    3 Phases in JS Engine:
-   First, the high-level source code moves to the syntax parser and gets converted into an abstract syntax tree(AST).
-   This AST moves to the interpreter which converts AST into executable bytecode.
-   Interpreter works with the compiler which works on optimizing the bytecode at RUNTIME and the bytecode executes.

This is how a JS Code is executed.

SOURCE CODE -> Parser -> AST -> Interpreter / Compiler -> Bytecode  

*/