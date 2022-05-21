

export const redirectUser = (navigate) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');

    const authCheck = token !== undefined && token !== null && userId !== undefined && userId !== null;

    if(false) {
        // redirect to homepage
        navigate('/home');
    }
    else {
        // redirect to login page
        navigate('/auth/login');
    }
}