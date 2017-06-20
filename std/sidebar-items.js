initSidebarItems({"macro":[["assert","Ensure that a boolean expression is `true` at runtime."],["assert_eq","Asserts that two expressions are equal to each other (using [`PartialEq`])."],["assert_ne","Asserts that two expressions are not equal to each other (using [`PartialEq`])."],["cfg","Boolean evaluation of configuration flags."],["column","A macro which expands to the column number on which it was invoked."],["concat","Concatenates literals into a static string slice."],["concat_idents","Concatenate identifiers into one identifier."],["debug_assert","Ensure that a boolean expression is `true` at runtime."],["debug_assert_eq","Asserts that two expressions are equal to each other."],["debug_assert_ne","Asserts that two expressions are not equal to each other."],["env","Inspect an environment variable at compile time."],["eprint","Macro for printing to the standard error."],["eprintln","Macro for printing to the standard error, with a newline."],["file","A macro which expands to the file name from which it was invoked."],["format","Use the syntax described in `std::fmt` to create a value of type `String`. See [`std::fmt`][fmt] for more information."],["format_args","The core macro for formatted string creation & output."],["include","Parse a file as an expression or an item according to the context."],["include_bytes","Includes a file as a reference to a byte array."],["include_str","Includes a utf8-encoded file as a string."],["line","A macro which expands to the line number on which it was invoked."],["module_path","Expands to a string that represents the current module path."],["option_env","Optionally inspect an environment variable at compile time."],["panic","The entry point for panic of Rust threads."],["print","Macro for printing to the standard output."],["println","Macro for printing to the standard output, with a newline. On all platforms, the newline is the LINE FEED character (`\\n`/`U+000A`) alone (no additional CARRIAGE RETURN (`\\r`/`U+000D`)."],["select","A macro to select an event from a number of receivers."],["stringify","A macro which stringifies its argument."],["thread_local","Declare a new thread local storage key of type [`std::thread::LocalKey`]."],["try","Helper macro for reducing boilerplate code for matching `Result` together with converting downstream errors."],["unimplemented","A standardized placeholder for marking unfinished code. It panics with the message `\"not yet implemented\"` when executed."],["unreachable","A utility macro for indicating unreachable code."],["vec","Creates a `Vec` containing the arguments."],["write","Write formatted data into a buffer"],["writeln","Write formatted data into a buffer, with a newline appended."]],"mod":[["any","This module implements the `Any` trait, which enables dynamic typing of any `'static` type through runtime reflection."],["ascii","Operations on ASCII strings and characters."],["borrow","A module for working with borrowed data."],["boxed","A pointer type for heap allocation."],["cell","Shareable mutable containers."],["char","A character type."],["clone","The `Clone` trait for types that cannot be 'implicitly copied'."],["cmp","Functionality for ordering and comparison."],["collections","Collection types."],["convert","Traits for conversions between types."],["default","The `Default` trait for types which may have meaningful default values."],["env","Inspection and manipulation of the process's environment."],["error","Traits for working with Errors."],["f32","This module provides constants which are specific to the implementation of the `f32` floating point data type. Mathematically significant numbers are provided in the `consts` sub-module."],["f64","This module provides constants which are specific to the implementation of the `f64` floating point data type. Mathematically significant numbers are provided in the `consts` sub-module."],["ffi","Utilities related to FFI bindings."],["fmt","Utilities for formatting and printing `String`s"],["fs","Filesystem manipulation operations."],["hash","Generic hashing support."],["i128","The 128-bit signed integer type."],["i16","The 16-bit signed integer type."],["i32","The 32-bit signed integer type."],["i64","The 64-bit signed integer type."],["i8","The 8-bit signed integer type."],["intrinsics","rustc compiler intrinsics."],["io","Traits, helpers, and type definitions for core I/O functionality."],["isize","The pointer-sized signed integer type."],["iter","Composable external iteration."],["marker","Primitive traits and types representing basic properties of types."],["mem","Basic functions for dealing with memory."],["net","Networking primitives for TCP/UDP communication."],["num","Additional functionality for numerics."],["ops","Overloadable operators."],["option","Optional values."],["os","OS-specific functionality."],["panic","Panic support in the standard library"],["path","Cross-platform path manipulation."],["prelude","The Rust Prelude."],["process","A module for working with processes."],["ptr","Raw, unsafe pointers, `*const T`, and `*mut T`."],["raw","Contains struct definitions for the layout of compiler built-in types."],["rc","Single-threaded reference-counting pointers. 'Rc' stands for 'Reference Counted'."],["result","Error handling with the `Result` type."],["slice","A dynamically-sized view into a contiguous sequence, `[T]`."],["str","Unicode string slices."],["string","A UTF-8 encoded, growable string."],["sync","Useful synchronization primitives."],["thread","Native threads."],["time","Temporal quantification."],["u128","The 128-bit unsigned integer type."],["u16","The 16-bit unsigned integer type."],["u32","The 32-bit unsigned integer type."],["u64","The 64-bit unsigned integer type."],["u8","The 8-bit unsigned integer type."],["usize","The pointer-sized unsigned integer type."],["vec","A contiguous growable array type with heap-allocated contents, written `Vec<T>`."]],"primitive":[["array","A fixed-size array, denoted `[T; N]`, for the element type, `T`, and the non-negative compile-time constant size, `N`."],["bool","The boolean type."],["char","A character type."],["f32","The 32-bit floating point type."],["f64","The 64-bit floating point type."],["i128","The 128-bit signed integer type."],["i16","The 16-bit signed integer type."],["i32","The 32-bit signed integer type."],["i64","The 64-bit signed integer type."],["i8","The 8-bit signed integer type."],["isize","The pointer-sized signed integer type."],["pointer","Raw, unsafe pointers, `*const T`, and `*mut T`."],["slice","A dynamically-sized view into a contiguous sequence, `[T]`."],["str","String slices."],["tuple","A finite heterogeneous sequence, `(T, U, ..)`."],["u128","The 128-bit unsigned integer type."],["u16","The 16-bit unsigned integer type."],["u32","The 32-bit unsigned integer type."],["u64","The 64-bit unsigned integer type."],["u8","The 8-bit unsigned integer type."],["usize","The pointer-sized unsigned integer type."]]});