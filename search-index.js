var N = null;var searchIndex = {};
searchIndex["lazycell"]={"doc":"This crate provides a `LazyCell` struct which acts as a lazily filled `Cell`.","items":[[3,"LazyCell","lazycell","A lazily filled `Cell`, with mutable contents.",N,N],[3,"AtomicLazyCell","","A lazily filled and thread-safe `Cell`, with frozen contents.",N,N],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"default","","",0,[[],["lazycell"]]],[11,"new","","Creates a new, empty, `LazyCell`.",0,[[],["lazycell"]]],[11,"fill","","Put a value into this cell.",0,[[["self"],["t"]],["result"]]],[11,"replace","","Put a value into this cell.",0,[[["self"],["t"]],["option"]]],[11,"filled","","Test whether this cell has been previously filled.",0,[[["self"]],["bool"]]],[11,"borrow","","Borrows the contents of this lazy cell for the duration of the cell itself.",0,[[["self"]],["option"]]],[11,"borrow_mut","","Borrows the contents of this lazy cell mutably for the duration of the cell itself.",0,[[["self"]],["option"]]],[11,"borrow_with","","Borrows the contents of this lazy cell for the duration of the cell itself.",0,[[["self"],["f"]],["t"]]],[11,"borrow_mut_with","","Borrows the contents of this `LazyCell` mutably for the duration of the cell itself.",0,[[["self"],["f"]],["t"]]],[11,"try_borrow_with","","Same as `borrow_with`, but allows the initializing function to fail.",0,[[["self"],["f"]],["result"]]],[11,"try_borrow_mut_with","","Same as `borrow_mut_with`, but allows the initializing function to fail.",0,[[["self"],["f"]],["result"]]],[11,"into_inner","","Consumes this `LazyCell`, returning the underlying value.",0,[[["self"]],["option"]]],[11,"get","","Returns a copy of the contents of the lazy cell.",0,[[["self"]],["option"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"default","","",1,[[],["atomiclazycell"]]],[18,"NONE","","An empty `AtomicLazyCell`.",1,N],[11,"new","","Creates a new, empty, `AtomicLazyCell`.",1,[[],["atomiclazycell"]]],[11,"fill","","Put a value into this cell.",1,[[["self"],["t"]],["result"]]],[11,"replace","","Put a value into this cell.",1,[[["self"],["t"]],["option"]]],[11,"filled","","Test whether this cell has been previously filled.",1,[[["self"]],["bool"]]],[11,"borrow","","Borrows the contents of this lazy cell for the duration of the cell itself.",1,[[["self"]],["option"]]],[11,"into_inner","","Consumes this `LazyCell`, returning the underlying value.",1,[[["self"]],["option"]]],[11,"get","","Returns a copy of the contents of the lazy cell.",1,[[["self"]],["option"]]]],"paths":[[3,"LazyCell"],[3,"AtomicLazyCell"]]};
initSearch(searchIndex);
