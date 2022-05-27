

export const redirectUser = (navigate) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');

    const authCheck = token !== undefined 
    && token !== null 
    && userId !== undefined 
    && userId !== null;

    console.log(authCheck);
    if(authCheck) {
        // redirect to homepage
        // navigate('');
    }
    else {
        // redirect to login page
        navigate('/auth/login');
    }
};

export const redirectToHomePage = (navigate) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');

    const authCheck = token !== undefined 
    && token !== null 
    && userId !== undefined 
    && userId !== null;

    console.log(authCheck);
    if(authCheck) {
        // redirect to homepage
        navigate('/home');
    }
};


export const redirectToLoginPage = (navigate) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');

    const authCheck = token !== undefined 
    && token !== null 
    && userId !== undefined 
    && userId !== null;

    console.log(authCheck);
    if(!authCheck) {
        // redirect to homepage
        navigate('/auth/login');
    }
};