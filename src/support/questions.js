const htmlQuiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    ans: "Hyper Text Markup Language",
  },
  {
    question: "Which tag creates a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    ans: "<a>",
  },
  // {
  //   question: "Which tag inserts an image?",
  //   options: ["<img>", "<image>", "<pic>", "<src>"],
  //   ans: "<img>",
  // },
  // {
  //   question: "Which tag creates a paragraph?",
  //   options: ["<p>", "<text>", "<para>", "<pg>"],
  //   ans: "<p>",
  // },
  // {
  //   question: "Largest heading tag?",
  //   options: ["<h6>", "<h1>", "<head>", "<heading>"],
  //   ans: "<h1>",
  // },
  // {
  //   question: "Tag for unordered list?",
  //   options: ["<ul>", "<ol>", "<li>", "<list>"],
  //   ans: "<ul>",
  // },
  // {
  //   question: "Tag for line break?",
  //   options: ["<br>", "<lb>", "<break>", "<newline>"],
  //   ans: "<br>",
  // },
  // {
  //   question: "HTML metadata is inside?",
  //   options: ["<body>", "<head>", "<meta>", "<footer>"],
  //   ans: "<head>",
  // },
  // {
  //   question: "Table row tag?",
  //   options: ["<td>", "<tr>", "<th>", "<row>"],
  //   ans: "<tr>",
  // },
  // {
  //   question: "Alternate text attribute?",
  //   options: ["alt", "title", "src", "href"],
  //   ans: "alt",
  // },
];

const cssQuiz = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    ans: "Cascading Style Sheets",
  },
  {
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    ans: "color",
  },
  {
    question: "Which property sets background color?",
    options: ["color", "bgcolor", "background-color", "background-style"],
    ans: "background-color",
  },
  {
    question: "How to select an id?",
    options: [".id", "#id", "*id", "id"],
    ans: "#id",
  },
  {
    question: "How to select a class?",
    options: ["#class", ".class", "*class", "class"],
    ans: ".class",
  },
  {
    question: "Property for font size?",
    options: ["font-style", "text-size", "font-size", "size"],
    ans: "font-size",
  },
  {
    question: "Flexbox property to align items?",
    options: ["align-items", "justify-text", "align-text", "flex-align"],
    ans: "align-items",
  },
  {
    question: "Display flex syntax?",
    options: [
      "display: block",
      "display: inline",
      "display: flex",
      "flex: display",
    ],
    ans: "display: flex",
  },
  {
    question: "CSS box model includes?",
    options: ["margin", "padding", "border", "All of these"],
    ans: "All of these",
  },
  {
    question: "Position property value for fixed element?",
    options: ["absolute", "relative", "fixed", "static"],
    ans: "fixed",
  },
];

const javaQuiz = [
  {
    question: "Java is a ___ language?",
    options: ["Compiled", "Interpreted", "Both", "None"],
    ans: "Both",
  },
  {
    question: "Main method signature?",
    options: [
      "public static void main(String[] args)",
      "main()",
      "static main()",
      "void main()",
    ],
    ans: "public static void main(String[] args)",
  },
  {
    question: "Java is platform ___?",
    options: ["Dependent", "Independent", "Specific", "Limited"],
    ans: "Independent",
  },
  {
    question: "Keyword to inherit class?",
    options: ["implements", "extends", "inherits", "super"],
    ans: "extends",
  },
  {
    question: "JVM stands for?",
    options: [
      "Java Virtual Machine",
      "Java Variable Method",
      "Joint Virtual Machine",
      "Java Verified Machine",
    ],
    ans: "Java Virtual Machine",
  },
  {
    question: "Which is not primitive?",
    options: ["int", "float", "String", "boolean"],
    ans: "String",
  },
  {
    question: "Exception handling keyword?",
    options: ["try", "error", "check", "handle"],
    ans: "try",
  },
  {
    question: "Package for input?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    ans: "java.io",
  },
  {
    question: "Loop keyword?",
    options: ["repeat", "for", "loop", "iterate"],
    ans: "for",
  },
  {
    question: "Object creation keyword?",
    options: ["create", "new", "object", "make"],
    ans: "new",
  },
];

const nodeQuiz = [
  {
    question: "Node.js is built on?",
    options: ["Chrome V8 Engine", "SpiderMonkey", "Java VM", "Python Engine"],
    ans: "Chrome V8 Engine",
  },
  {
    question: "File system module?",
    options: ["fs", "http", "os", "path"],
    ans: "fs",
  },
  {
    question: "Create server module?",
    options: ["http", "fs", "url", "server"],
    ans: "http",
  },
  {
    question: "Install package command?",
    options: ["npm install", "node install", "install npm", "package install"],
    ans: "npm install",
  },
  {
    question: "Node.js is ___?",
    options: ["Blocking", "Non-blocking", "Manual", "Synchronous only"],
    ans: "Non-blocking",
  },
  {
    question: "Package file name?",
    options: ["package.json", "node.json", "app.json", "config.json"],
    ans: "package.json",
  },
  {
    question: "Framework for Node?",
    options: ["Express", "Laravel", "Django", "Spring"],
    ans: "Express",
  },
  {
    question: "Import module syntax?",
    options: ["require()", "include()", "import()", "use()"],
    ans: "require()",
  },
  {
    question: "Environment variable object?",
    options: ["process.env", "env", "global.env", "node.env"],
    ans: "process.env",
  },
  {
    question: "Node package manager?",
    options: ["npm", "npx", "node", "package"],
    ans: "npm",
  },
];

const reactQuiz = [
  {
    question: "React is a ___?",
    options: ["Framework", "Library", "Language", "Database"],
    ans: "Library",
  },
  {
    question: "Hook for state?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    ans: "useState",
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "Java Extended",
    ],
    ans: "JavaScript XML",
  },
  {
    question: "Component must return?",
    options: ["HTML", "JSX", "String", "CSS"],
    ans: "JSX",
  },
  {
    question: "Hook for lifecycle?",
    options: ["useEffect", "useLife", "useHook", "useMount"],
    ans: "useEffect",
  },
  {
    question: "Props are?",
    options: ["Mutable", "Immutable", "Global", "Local"],
    ans: "Immutable",
  },
  {
    question: "Create React app command?",
    options: [
      "npx create-react-app",
      "npm react",
      "node react",
      "install react",
    ],
    ans: "npx create-react-app",
  },
  {
    question: "Virtual DOM improves?",
    options: ["Performance", "Design", "Database", "Security"],
    ans: "Performance",
  },
  {
    question: "Key prop is used in?",
    options: ["Lists", "Forms", "Hooks", "CSS"],
    ans: "Lists",
  },
  {
    question: "React is maintained by?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    ans: "Facebook",
  },
];

const sqlQuiz = [
  {
    question: "SQL stands for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Language",
      "Standard Query List",
    ],
    ans: "Structured Query Language",
  },
  {
    question: "Select all columns?",
    options: ["SELECT *", "SELECT ALL", "GET *", "FETCH ALL"],
    ans: "SELECT *",
  },
  {
    question: "Insert command?",
    options: ["ADD", "INSERT INTO", "PUT", "CREATE"],
    ans: "INSERT INTO",
  },
  {
    question: "Delete command?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    ans: "DELETE",
  },
  {
    question: "Update command?",
    options: ["MODIFY", "UPDATE", "CHANGE", "SET"],
    ans: "UPDATE",
  },
  {
    question: "Primary key is?",
    options: ["Unique", "Duplicate", "Null", "Optional"],
    ans: "Unique",
  },
  {
    question: "Join keyword?",
    options: ["MERGE", "CONNECT", "JOIN", "LINK"],
    ans: "JOIN",
  },
  {
    question: "Constraint for uniqueness?",
    options: ["PRIMARY", "UNIQUE", "FOREIGN", "INDEX"],
    ans: "UNIQUE",
  },
  {
    question: "Sort results?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"],
    ans: "ORDER BY",
  },
  {
    question: "Group records?",
    options: ["GROUP BY", "ORDER BY", "SORT BY", "FILTER BY"],
    ans: "GROUP BY",
  },
];


export const allQuizzez={
  html:htmlQuiz,
  css:cssQuiz,
  java:javaQuiz,
  node:nodeQuiz,
  react:reactQuiz,
  sql:sqlQuiz
}