
componentWillMount () {
    (async _ => {
        const info = await checkToken();
        window.userPermissions = [
            ...info.permissions,
            ...info.roles,
        ];
        window.uid = info.id;
        window.constants = await fetchConstants();
        this.setState({
            loading: false
        });
    })().catch(error => {
        /*eslint-disable*/
        console.error(error);
        this.setState({
            loading: false,
            error
        });
    });
}

componentWillMount () {
    (async _ => {
        const info = await checkToken();
        window.userPermissions = [
            ...info.permissions,
            ...info.roles,
        ];
        window.uid = info.id;
        window.constants = await fetchConstants();
        this.setState({
            loading: false
        });
    })().catch(error => {
        /*eslint-disable*/
        console.error(error);
        this.setState({
            loading: false,
            error
        });
    });
}