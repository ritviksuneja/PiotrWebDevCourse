
function Card(props){
  return(
    <div className="border rounded-md border-gray-600 p-4">
      Card component. {props.text}
    </div>
  )
}

export default function Home() {

  const name = "Ritvik";

  return (
    <>
      <div className = "p-20 space-y-4">
        Hello, {name}  

        <Card text="This is being passed from the parent"/>
        <Card />
        <Card />
        
      </div>
    </>
  )
}
