import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles';
import {
    StyledSideBarArea,
    StyledTitle,
    StyledList,
    StyledListItem,
} from './styles';

export default function SideBar() {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get('/categories');
            setCategory(response.data);
        };
        getCategory();
    }, []);
    return (
        <>
            <StyledSideBarArea>
                <StyledTitle>CATGORIES</StyledTitle>
                <StyledList>
                    {categories.map((category) => (
                        <Link
                            to={`/?category=${category.name}`}
                            className="link"
                        >
                            <StyledListItem>{category.name}</StyledListItem>
                        </Link>
                    ))}
                </StyledList>
            </StyledSideBarArea>
        </>
    );
}
