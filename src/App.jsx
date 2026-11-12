import './styles/App.css'

function App() {

  const images = [
    "HANSPIK.jpg",
    "SKIPPERNUMSEGØJ.jpg",
    "hrskidesen.jpg",
    "sminister.jpg",
    "flotguldbillede.jpg",
    "avavav.png",
    "desejedrenge.png",
    "bulbasaur4.png",
    "bulbasaur5.png",
    "bulbasaur.6png",
    "bulbasaur.7png",
    "bulbasaur.8png",
    "bulbasaur.8png",
    "bulbasaur.8png",
    "bulbasaur.8png"

  ];

  return (
    <>
      <div className='Base'>
        <h1 className='Overskrift'>Jule Frokost Leg</h1>
        <p>Skæg og ballade kan forkomme</p>
      </div>

      <div className='Billeder'>
        {images.map((image, index) => (
          <img
            key={index}
            src={`/images/${image}`}
            alt={image}
          />
        ))}
      </div>
    </>


  )
}

export default App
