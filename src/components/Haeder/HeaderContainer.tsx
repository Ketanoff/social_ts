import React from 'react';
import Header from './Header';
import {getAuthUsersData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUsersData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    
    componentDidMount() {
        this.props.getAuthUsersData();
    }
    
    render() {
        return <Header {...this.props as HeaderContainerPropsType}/>;
    }
};

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login : state.auth.login
});

export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer);