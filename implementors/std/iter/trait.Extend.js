(function() {var implementors = {};
implementors["std"] = ["impl&lt;T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='std/collections/binary_heap/struct.BinaryHeap.html' title='std::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/collections/binary_heap/struct.BinaryHeap.html' title='std::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: 'a + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a> + <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='primitive' href='primitive.tuple.html'>(</a>K, V<a class='primitive' href='primitive.tuple.html'>)</a>&gt; for <a class='struct' href='std/collections/btree_map/struct.BTreeMap.html' title='std::collections::btree_map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='primitive' href='primitive.tuple.html'>(</a>&amp;'a K, &amp;'a V<a class='primitive' href='primitive.tuple.html'>)</a>&gt; for <a class='struct' href='std/collections/btree_map/struct.BTreeMap.html' title='std::collections::btree_map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a> + <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a>, V: <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a></span>","impl&lt;T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='std/collections/btree_set/struct.BTreeSet.html' title='std::collections::btree_set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/collections/btree_set/struct.BTreeSet.html' title='std::collections::btree_set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: 'a + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a> + <a class='trait' href='std/cmp/trait.Ord.html' title='std::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;'a, E&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: 'a + <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a> + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a></span>","impl&lt;T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='std/collections/linked_list/struct.LinkedList.html' title='std::collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/collections/linked_list/struct.LinkedList.html' title='std::collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt; <span class='where'>where T: 'a + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a></span>","impl <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='primitive' href='primitive.char.html'>char</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='primitive.char.html'>char</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: 'a + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a></span>","impl&lt;A&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='std/collections/vec_deque/struct.VecDeque.html' title='std::collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/collections/vec_deque/struct.VecDeque.html' title='std::collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: 'a + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a></span>","impl&lt;K, V, S&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='primitive' href='primitive.tuple.html'>(</a>K, V<a class='primitive' href='primitive.tuple.html'>)</a>&gt; for <a class='struct' href='std/collections/struct.HashMap.html' title='std::collections::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where K: <a class='trait' href='std/cmp/trait.Eq.html' title='std::cmp::Eq'>Eq</a> + <a class='trait' href='std/hash/trait.Hash.html' title='std::hash::Hash'>Hash</a>, S: <a class='trait' href='std/hash/trait.BuildHasher.html' title='std::hash::BuildHasher'>BuildHasher</a></span>","impl&lt;'a, K, V, S&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;<a class='primitive' href='primitive.tuple.html'>(</a>&amp;'a K, &amp;'a V<a class='primitive' href='primitive.tuple.html'>)</a>&gt; for <a class='struct' href='std/collections/struct.HashMap.html' title='std::collections::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where K: <a class='trait' href='std/cmp/trait.Eq.html' title='std::cmp::Eq'>Eq</a> + <a class='trait' href='std/hash/trait.Hash.html' title='std::hash::Hash'>Hash</a> + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a>, V: <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a>, S: <a class='trait' href='std/hash/trait.BuildHasher.html' title='std::hash::BuildHasher'>BuildHasher</a></span>","impl&lt;T, S&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='std/collections/struct.HashSet.html' title='std::collections::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where T: <a class='trait' href='std/cmp/trait.Eq.html' title='std::cmp::Eq'>Eq</a> + <a class='trait' href='std/hash/trait.Hash.html' title='std::hash::Hash'>Hash</a>, S: <a class='trait' href='std/hash/trait.BuildHasher.html' title='std::hash::BuildHasher'>BuildHasher</a></span>","impl&lt;'a, T, S&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='std/collections/struct.HashSet.html' title='std::collections::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where T: 'a + <a class='trait' href='std/cmp/trait.Eq.html' title='std::cmp::Eq'>Eq</a> + <a class='trait' href='std/hash/trait.Hash.html' title='std::hash::Hash'>Hash</a> + <a class='trait' href='std/marker/trait.Copy.html' title='std::marker::Copy'>Copy</a>, S: <a class='trait' href='std/hash/trait.BuildHasher.html' title='std::hash::BuildHasher'>BuildHasher</a></span>","impl&lt;P:&nbsp;<a class='trait' href='std/convert/trait.AsRef.html' title='std::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt;&gt; <a class='trait' href='std/iter/trait.Extend.html' title='std::iter::Extend'>Extend</a>&lt;P&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
