// 列表类的实现
// nodejs
// create by xiongwei

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = append;
    this.find = find;
    this.remove = remove;
    this.length = length;
    this.toString = toString;
    this.insert = insert;
    this.clear = clear;
    this.contains = contains;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
}

// 添加元素
function append( element) {
    this.dataStore[ this.listSize++] = element;
}

// 查找元素，返回pos
function find( element) {
    for( var i = 0; i < this.listSize; i++) {
        if( this.dataStore[ i] == element) {
            return i;
        }
    }
    return -1;
}

// 删除元素，成功返回true，失败返回false
function remove( element) {
    var foundAt = this.find( element);
    if( foundAt != -1) {
        this.dataStore.splice( foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}

// 元素数量
function length() {
    return this.listSize;
}

// 显示元素
function toString() {
    return this.dataStore;
}

// 插入元素
function insert( element, after) {
    var insertPos = this.find( after);
    if( insertPos != -1) {
        this.dataStore.splice( insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

// 清空列
function clear() {
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

// 判断是否包含某元素
function contains( elements) {
    for( var i = 0; i < this.listSize; i++) {
        if( this.dataStore[ i] == elements) return true;
    }
    return false;
}

// 遍历列表
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if( this.pos >= 0) this.pos--;
}

function next() {
    if( this.pos < this.listSize ) this.pos++;
}

function currPos() {
    return this.pos;
}

function moveTo( position) {
    if( position > -1 && position < this.listSize ) this.pos = position;
}

function getElement() {
    return this.dataStore[ this.pos];
}

// 测试代码
var names = new List();
names.append( "Xiongwei");
names.append( "SYT");
names.append( "xiaoShen");
console.log( names.toString());
names.remove( "xiaoShen");
console.log( names.toString());

names.insert( "xiaoShen", "SYT");
console.log( names.toString());
//names.clear();
console.log( names.toString());
console.log( names.contains( "SYT"));
console.log( names.contains( "xxx"));

var names = new List();
names.append( "xiongwei");
names.append( "syt");
names.append( "ps");
names.append( "wx");
names.append( "hx");
console.log( names.toString());
names.front();
console.log( names.getElement());
names.next();
console.log( names.getElement());
names.next();
names.next();
names.prev();
console.log( names.getElement());

//迭代器遍历
console.log( "迭代器");
for( names.front(); names.currPos() < 5; names.next()) {
    console.log( names.getElement());
}
for( names.end(); names.currPos() >= 0; names.prev()) {
    console.log( names.getElement());
}
