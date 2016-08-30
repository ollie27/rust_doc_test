initSidebarItems({"fn":[["copy","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may *not* overlap."],["drop_in_place","Executes the destructor (if any) of the pointed-to value."],["null","Creates a null raw pointer."],["null_mut","Creates a null mutable raw pointer."],["read","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_volatile","Performs a volatile read of the value from `src` without moving it. This leaves the memory in `src` unchanged."],["replace","Replaces the value at `dest` with `src`, returning the old value, without dropping either."],["swap","Swaps the values at two mutable locations of the same type, without deinitializing either. They may overlap, unlike `mem::swap` which is otherwise equivalent."],["write","Overwrites a memory location with the given value without reading or dropping the old value."],["write_bytes","Invokes memset on the specified pointer, setting `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."],["write_volatile","Performs a volatile write of a memory location with the given value without reading or dropping the old value."]],"struct":[["Shared","A wrapper around a raw non-null `*mut T` that indicates that the possessor of this wrapper has shared ownership of the referent. Useful for building abstractions like `Rc<T>` or `Arc<T>`, which internally use raw pointers to manage the memory that they own."],["Unique","A wrapper around a raw non-null `*mut T` that indicates that the possessor of this wrapper owns the referent. This in turn implies that the `Unique<T>` is `Send`/`Sync` if `T` is `Send`/`Sync`, unlike a raw `*mut T` (which conveys no particular ownership semantics).  It also implies that the referent of the pointer should not be modified without a unique path to the `Unique` reference. Useful for building abstractions like `Vec<T>` or `Box<T>`, which internally use raw pointers to manage the memory that they own."]]});