const Logedin = (props) => {
    return(
        <>
            <button class="btn btn-sm" type="button" style={{textAlign: 'right'}}>
            <div style={{display: 'flex'}}>
                <img style={{marginTop: '-4px', width: '40px', height: '40px'}} src={props.pic} alt='profile pic'/>&nbsp;&nbsp;<p style={{marginTop: '5px'}}>Siddharth Goyal</p>
            </div>
            </button>
            <button disabled type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
        </>
    );
}
export default Logedin;