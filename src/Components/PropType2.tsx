type GreetProps = {
    name: string;
}


export const Greet = (props: GreetProps) => { 
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}


//benefit this code give us is that it sugests the type of the props 