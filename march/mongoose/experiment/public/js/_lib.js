function buildDom() {
  const root = document.getElementById('root');
  root.appendChild(createForm('/message', 'POST'));
  root.appendChild(createText('Bugs Bunny'));
  root.appendChild(createText('Rubber Baby Buggy Bumpers'));
}

function createButton(text, className = null, eleId = null) {
  const btn = document.createElement("button");
  const t = document.createTextNode(text);
  btn.appendChild(t);
  if (className) btn.className = className;
  if (eleId) btn.id = eleId;
  return btn;
}

function createTextInput(text, name, eleId = null) {
  const input = document.createElement("input");
  input.type = 'text';
  input.placeholder = text;
  input.name = name;
  if (eleId) input.eleId = eleId;
  return input;
}

function createBreak() {
  return document.createElement("br");
}

function createForm(method, action, className = null, eleId = null) {
  const f = document.createElement("form");
  f.method = method;
  f.action = action;
  f.appendChild(createTextInput('Name', 'postedBy'));
  f.appendChild(createBreak());
  f.appendChild(createTextInput('Message', 'content'));
  f.appendChild(createBreak());
  f.appendChild(createButton('Submit', 'btn', 'submitMessage'));
  return f;
}

function createDiv(className = null, eleId = null) {
  const div = document.createElement("div");
  if (className) div.className = className;
  if (eleId) div.id = eleId;
  return div;
}

function createText(content, className = null, eleId = null) {
  const ele = document.createElement('p');
  ele.innerText = content;
  if (className) ele.className = className;
  if (eleId) ele.id = eleId;
  return ele;
}