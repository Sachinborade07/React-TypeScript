type StatProps = {
    status: 'loading' | 'success' | 'error' | string;
}

export const Status = (props: StatProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data Fetched Successfully'
    } else if (props.status === 'error') {
        message = 'Error Fetching the Data'
    }
    else {
        message = 'Some Unwanted message has been received'
    }
    return (
        <div>
            <h2> Status - {message}</h2>
        </div>
    )
}