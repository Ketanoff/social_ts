import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images1.png';
import {NavLink} from 'react-router-dom';
import {createPages} from '../common/PageCreator';
import {UsersType} from '../../redux/usersReducer';

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    followingInProgress: Array<string>
}

let Users = (props: UsersPropsType) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    createPages(pages, pagesCount, props.currentPage);
    
    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.cursor}
                             onClick={(e) => {props.onPageChanged(p);}}>{p}-</span>;
            })}
            <div>Total ({pagesCount}pages)</div>
        
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.unFollow(u.id);}}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.follow(u.id);}}>Follow</button>}
                </div>
            </div>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
        </div>)
        }
    </div>;
};

export default Users;