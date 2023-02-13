import CardContainer from "./components/CardContainer";
function App() {
  const cardsFromFakeDatabse = [{
    img: 'https://random.imagecdn.app/200/100',
    title: 'This is a title1',
    description: 'This is a description1',
    shareHref: '#',
    exploreHref: '#',

  },
  {
    img: 'https://picsum.photos/200/100',
    title: 'This is a title2',
    description: 'This is a description2',
    shareHref: '#',
    exploreHref: '#',

  },
  {
    img: 'https://picsum.photos/id/237/200/100',
    title: 'This is a title3',
    description: 'This is a description3',
    shareHref: '#',
    exploreHref: '#',

  }]

  return (
    <CardContainer data={cardsFromFakeDatabse} />
  );
}

export default App;
