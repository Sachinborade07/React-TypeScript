type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn?: boolean;
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `Welcome ${props.name} To REACT Application. You have ${props.messageCount}
                new things to learn.` : 'Welcome GUEST'
                }
            </h1>

        </div>
    )
}