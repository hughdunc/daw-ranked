
function Channel(props) {
  return (
    <div className="flex flex-row items-center gap-2">
        <button className={`cursor-pointer w-32 h-8 flex items-center bg-${props.color ?? "gray-500"} justify-center rounded-lg text-white`} onClick={clicked}>{props.name}</button>
        <div className="flex gap-1 items-center">
            {Array.from({ length: props.amt }).map((_) => (
                <input type="checkbox" name="drum" className="drumCheckbox" />
            ))}
        </div>
    </div>
  )
}

function clicked() {
    alert("hi")
}

export default Channel