import './delete.css';

const Delete = () => {

    async function deleteProfile() {
        await fetch('http://localhost:5001/profile/userdelete', {
            method: 'delete', credentials: 'include'
        })
            .then((response) => response.json())
    }

    return (
        <>
            <button
                type='button'
                className="btn btn-danger mx-auto mb-5"
                data-bs-toggle="modal"
                data-bs-target="#Modal"
            >Delete profile
            </button>

            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Confirm Action</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Delete your profile?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" onClick={deleteProfile} data-bs-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete;