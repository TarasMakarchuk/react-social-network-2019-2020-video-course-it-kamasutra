import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    requestUsers,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/usersSelectors";

class UsersContainer extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let { currentPage,  pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = pageNumber => {
        const { getUsers, pageSize } = this.props;
        getUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers
        },
    ))(UsersContainer);