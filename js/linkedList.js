define(function() {
	function LinkedList() {
		var self;

		/**
		 * Linked list node.
		 * @public
		 * @factory
		 * @param {Object} data Data of the node.
		 */
		function Node(data) {
			return {
				data: data,
				next: null,
				prev: null
			};
		}

		/**
		 * Add data to the end of linked list.
		 * @public
		 * @method
		 * @param  {Object} data Data which should be added.
		 */
		function push(data) {
			var node = Node(data);
			if (self.first === null) {
				self.first = self.last = node;
			} else {
				var temp = self.last;
				self.last = node;
				node.prev = temp;
				temp.next = node;
			}
		}

		/**
		 * Add data to the beginning of linked list.
		 * @public
		 * @method
		 * @param  {Object} data Data which should be added.
		 */
		function unshift(data) {
			var node = Node(data);
			if (self.first === null) {
				self.first = self.last = node;
			} else {
				var temp = self.first;
				self.first = node;
				node.next = temp;
				temp.prev = node;
			}
		}

		/**
		 * In order traversal of the linked list.
		 * @public
		 * @method
		 * @param  {Function} cb Callback which should be executed on each node.
		 */
		function inorder(cb) {
			var temp = self.first;
			while (temp) {
				cb(temp);
				temp = temp.next;
			}
		}

		/**
		 * Remove data from the linked list.
		 * @public
		 * @method
		 * @param  {Object} data Data which should be removed.
		 * @return {Boolean}      Returns true if data has been removed.
		 */
		function remove(data) {
			if (self.first === null) {
				return false;
			}

			var next;
			var prev;
			var temp = self.first;
			while (temp) {
				if (temp.data === data) {
					next = temp.next;
					prev = temp.prev;
					if (next) {
						next.prev = prev;
					}
					if (prev) {
						prev.next = next;
					}
					if (temp === self.first) {
						self.first = next;
					}
					if (temp === self.last) {
						self.last = prev;
					}
					return true;
				}
				temp = temp.next;
			}
			return false;
		}

		/**
		 * Check if linked list contains cycle.
		 * @public
		 * @method 
		 * @return {Boolean} Returns true if linked list contains cycle.
		 */
		function hasCycle() {
			var fast = self.first;
			var slow = self.first;
			while (true) {
				if (fast === null) {
					return false;
				}
				fast = fast.next;
				if (fast === null) {
					return false;
				}
				fast = fast.next;
				slow = slow.next;
				if (fast === slow) {
					return true;
				}
			}
		}

		/**
		 * Return last node from the linked list.
		 * @public
		 * @method
		 * @return {Node} Last node.
		 */
		function pop() {
			if (self.last === null) {
				return null;
			}
			var temp = self.last;
			self.last = self.last.prev;
			return temp;
		}

		/**
		 * Return first node from the linked list.
		 * @public
		 * @method
		 * @return {Node} First node.
		 */
		function shift() {
			if (self.first === null) {
				return null;
			}

			var temp = self.first;
			self.first = self.first.next;
			return temp;
		}

		/**
		 * Reverses the linked list recursively.
		 * @public
		 * @method
		 */
		function recurseiveReverse() {
			function inverse(current, next) {
				if (!next) {
					return;
				}
				inverse(next, next.next);
				next.next = current;
			}
			if (!self.first) {
				return;
			}
			inverse(self.first, self.first.next);
			self.first.next = null;
			var temp = self.first;
			self.first = self.last;
			self.last = temp;
		}

		/**
		 * Reverses the linkd list iteratively
		 * @public
		 * @method
		 */
		function reverse() {
			if (!self.first || self.first.next) {
				return;
			}
			var current = self.first.next;
			var prev = self.first;
			var temp;
			while (current) {
				temp = current.next;
				current.next = prev;
				prev.prev = current;
				prev = current;
				current = temp;
			}
			self.first.next = null;
			self.last.prev = null;
			temp = self.first;
			self.first = prev;
			self.last = temp;
		}

		self = {
			first: null,
			last: null,
			push: push,
			unshift: unshift,
			inorder: inorder,
			remove: remove,
			hasCycle: hasCycle,
			pop: pop,
			shift: shift,
			recurseiveReverse: recurseiveReverse,
			reverse: reverse,
			Node: Node
		};
		return self;
	}
	return LinkedList;
});