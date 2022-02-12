import './styles';
import {
    StyledSideBarArea,
    StyledTitle,
    StyledList,
    StyledListItem,
} from './styles';

export default function SideBar() {
    return (
        <>
            <StyledSideBarArea>
                <StyledTitle>ABOUT ME</StyledTitle>
                <p>Something here, lts of text blah blha blha.</p>
                <StyledTitle>CATGORIES</StyledTitle>
                <StyledList>
                    <StyledListItem>Life</StyledListItem>
                    <StyledListItem>Music</StyledListItem>
                    <StyledListItem>Style</StyledListItem>
                    <StyledListItem>Sport</StyledListItem>
                    <StyledListItem>Technology</StyledListItem>
                    <StyledListItem>Cinema</StyledListItem>
                </StyledList>
            </StyledSideBarArea>
        </>
    );
}
