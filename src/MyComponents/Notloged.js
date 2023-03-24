const NotLoged = (props) => {
    return(
        <>
            <button data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm" type="button" style={{textAlign: 'right'}}>
                Create account.<span style={{color: 'blue'}}> It's free!</span>
            </button>
            <button disabled type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
        </>
    );
}
export default NotLoged;