(function() {var implementors = {};
implementors["alloc"] = ["impl&lt;I:&nbsp;<a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;I&gt;",];
implementors["collections"] = ["impl&lt;I&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/u_str/struct.Utf16Encoder.html' title='rustc_unicode::u_str::Utf16Encoder'>Utf16Encoder</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a>&lt;Item=char&gt;</span>","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/str/struct.SplitWhitespace.html' title='collections::str::SplitWhitespace'>SplitWhitespace</a>&lt;'a&gt;","impl <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/char/struct.ToLowercase.html' title='rustc_unicode::char::ToLowercase'>ToLowercase</a>","impl <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/char/struct.ToUppercase.html' title='rustc_unicode::char::ToUppercase'>ToUppercase</a>","impl&lt;I&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/boxed/struct.Box.html' title='collections::boxed::Box'>Box</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/binary_heap/struct.Iter.html' title='collections::binary_heap::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/binary_heap/struct.IntoIter.html' title='collections::binary_heap::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/binary_heap/struct.Drain.html' title='collections::binary_heap::Drain'>Drain</a>&lt;'a, T&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.Iter.html' title='collections::btree_map::Iter'>Iter</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.IterMut.html' title='collections::btree_map::IterMut'>IterMut</a>&lt;'a, K, V&gt;","impl&lt;K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.IntoIter.html' title='collections::btree_map::IntoIter'>IntoIter</a>&lt;K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.Keys.html' title='collections::btree_map::Keys'>Keys</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.Values.html' title='collections::btree_map::Values'>Values</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.ValuesMut.html' title='collections::btree_map::ValuesMut'>ValuesMut</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.Range.html' title='collections::btree_map::Range'>Range</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_map/struct.RangeMut.html' title='collections::btree_map::RangeMut'>RangeMut</a>&lt;'a, K, V&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.Iter.html' title='collections::btree_set::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.IntoIter.html' title='collections::btree_set::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.Range.html' title='collections::btree_set::Range'>Range</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.Difference.html' title='collections::btree_set::Difference'>Difference</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.SymmetricDifference.html' title='collections::btree_set::SymmetricDifference'>SymmetricDifference</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.Intersection.html' title='collections::btree_set::Intersection'>Intersection</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/btree_set/struct.Union.html' title='collections::btree_set::Union'>Union</a>&lt;'a, T&gt;","impl&lt;E:&nbsp;<a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a>&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/enum_set/struct.Iter.html' title='collections::enum_set::Iter'>Iter</a>&lt;E&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/linked_list/struct.Iter.html' title='collections::linked_list::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/linked_list/struct.IterMut.html' title='collections::linked_list::IterMut'>IterMut</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/linked_list/struct.IntoIter.html' title='collections::linked_list::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/str/struct.EncodeUtf16.html' title='collections::str::EncodeUtf16'>EncodeUtf16</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec_deque/struct.Iter.html' title='collections::vec_deque::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec_deque/struct.IterMut.html' title='collections::vec_deque::IterMut'>IterMut</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec_deque/struct.IntoIter.html' title='collections::vec_deque::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='collections/vec_deque/struct.Drain.html' title='collections::vec_deque::Drain'>Drain</a>&lt;'a, T&gt;",];
implementors["rustc_unicode"] = ["impl&lt;I&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/str/struct.Utf16Encoder.html' title='rustc_unicode::str::Utf16Encoder'>Utf16Encoder</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a>&lt;Item=char&gt;</span>","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/str/struct.SplitWhitespace.html' title='rustc_unicode::str::SplitWhitespace'>SplitWhitespace</a>&lt;'a&gt;","impl <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/char/struct.ToLowercase.html' title='rustc_unicode::char::ToLowercase'>ToLowercase</a>","impl <a class='trait' href='core/iter/traits/trait.FusedIterator.html' title='core::iter::traits::FusedIterator'>FusedIterator</a> for <a class='struct' href='rustc_unicode/char/struct.ToUppercase.html' title='rustc_unicode::char::ToUppercase'>ToUppercase</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
