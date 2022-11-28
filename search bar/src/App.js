import Employees from './Employees/Employees';
const posts=[{
    "id": 1,
    "name": "Frodo Baggins",
    "department": "Management",
    "role": "CEO"
  },
  {
    "id": 2,
    "name": "Samwise Gamgee",
    "department": "Management",
    "role": "CTO"
  },
  {
    "id": 3,
    "name": "Gandalf the Gray",
    "department": "Recruitment",
    "role": "Lead-recruiter"
  },
  {
    "id": 4,
    "name": "Aragorn",
    "department": "Security",
    "role": "Security officer"
  },
  {
    "id": 5,
    "name": "Legolas",
    "department": "Management",
    "role": "Office manager"
  }
] 
const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(posts, query);

    return (
        <div>
            <Search />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;