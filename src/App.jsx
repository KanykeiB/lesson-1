
import './App.css';
import Posts from './components/content/content/index'

const DATA = [
  {
    id: 1,
    title: 'First Block',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
      id: 2,
      title: 'Second Block',
      body: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
      id: 3,
      title: 'Third Block',
      body: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 4,
      title: 'Forth Block',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
      id: 5,
      title: 'Fifth Block',
      body: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    }
]
function App() {
  return (
    <div className="App">
        {DATA.map((item)=>(
          <Posts
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          />
        ))}

    </div>
  );
}

export default App;
