"use strict";

var Node = function(data) {
	this.data = data;
	this.next = null;
};

var LinkedList = function() {
	this.head = null;
	this.length = 0;
};

LinkedList.prototype.add = function(data) {
	//initialize node
	var nodeToAdd = new Node(data);
	var currentNode = this.head;
//debugger;
	//case: if no node found in the list
	if (!currentNode) {
		this.head = nodeToAdd;
		this.length++;
		return this.head;
	}
	
	var previousNode;
	//case: if there is nodes existed, traverse to the end of the list, 
	//and attach new node to the end
	while (currentNode) {
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
	previousNode.next = nodeToAdd;
	this.length++;


	return nodeToAdd;
};

LinkedList.prototype.search = function(data) {
	//return null when nothing in the list
	if (this.length === 0)
		return null;

	//initialize node
	var currentNode = this.head;

	while(currentNode && currentNode.data !== data) {
		currentNode = currentNode.next;
	}

	return currentNode;
}


LinkedList.prototype.remove = function(data) {
	//case: list is empty nothing can be removed
	if (this.length === 0)
		return null;

	var currentNode = this.head;
	var nodeToRemove;
	//case: remove head
	if (currentNode.data === data) {
		this.head = currentNode.next;
		this.length--;
		nodeToRemove = currentNode;
		return nodeToRemove;
	}
	//case: remove none head
	var previousNode = currentNode;
	while (currentNode) {
		
		if (currentNode.data === data) {
			previousNode.next = currentNode.next;
			nodeToRemove = currentNode;
			currentNode = null;
			this.length--;
		}
		else {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	return nodeToRemove;
}

var list = new LinkedList();
list.add("andre");
list.add("carol");
debugger;
console.log(list.length);
console.log(list);
console.log(list.search("carol"));
console.log(list.remove("andre"));
console.log(list.remove("carol"));
console.log(list);