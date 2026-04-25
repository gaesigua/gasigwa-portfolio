const quiz = {
  id: "graph-theory-quiz",
  title: "Graph Theory",
  questions: [
    {
      question: "In Graph Theory terminology, what is a Circuit?",
      options: [
        "A line that connects two different graphs.",
        "A path that starts and ends at the SAME vertex.",
        "A sequence of vertices connected by edges with no repeated vertices at all.",
        "A graph with no edges."
      ],
      correctIndex: 1,
      hint: "It goes around and comes back.",
      explanation: "A circuit is a closed path that begins and ends at the exact same vertex."
    },
    {
      question: "Which of the following is true about an Adjacency Matrix for an undirected graph?",
      options: [
        "It is always symmetrical.",
        "It can never have zeros.",
        "The rows represent edges and the columns represent vertices.",
        "It only contains negative numbers."
      ],
      correctIndex: 0,
      hint: "If A connects to B, then B connects to A.",
      explanation: "Because connections in an undirected graph are mutual (A-B is the same as B-A), the resulting adjacency matrix is always symmetrical across its diagonal."
    },
    {
      question: "What does it mean for a directed graph to be 'Strongly Connected'?",
      options: [
        "There is only one single path between nodes.",
        "There is a directed path from every vertex to every other vertex following the arrows.",
        "If you ignore the arrows, the graph is connected.",
        "All vertices have a degree of 1."
      ],
      correctIndex: 1,
      hint: "You can travel anywhere following the rules.",
      explanation: "A digraph is strongly connected if you can legally navigate from any node to any other node while obeying the direction of the arrows."
    },
    {
      question: "If an edge connects two cities in a transport network, what might a 'weight' on that edge represent?",
      options: [
        "The name of the city.",
        "The alphabetical order of the vertices.",
        "The distance, time, or cost of traveling between them.",
        "The number of letters in the street name."
      ],
      correctIndex: 2,
      hint: "It represents the cost of taking that path.",
      explanation: "In transport networks, weighted edges represent quantitative metrics like physical distance, financial cost, or travel time required to traverse that link."
    },
    {
      question: "What is the Degree of a vertex?",
      options: [
        "Its temperature in Kelvin.",
        "The number of vertices in the entire graph.",
        "The number of edges incident on (touching) that vertex.",
        "The number of circuits it belongs to."
      ],
      correctIndex: 2,
      hint: "It counts the connections.",
      explanation: "The degree of a vertex is exactly the number of edges that connect directly to it."
    }
  ]
};

export default quiz;
