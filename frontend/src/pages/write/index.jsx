import './styles';
import './index.css';
import {
    StyledForm,
    StyledFormGroup,
    StyledHeaderImage,
    StyledInput,
    StyledLable,
    StyledWriteArea,
} from './styles';
import Button from './../../common/components/button';

export default function write() {
    return (
        <>
            <StyledWriteArea>
                <StyledHeaderImage src="https://images.unsplash.com/photo-1627892543008-e3761263b8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=919&q=80"></StyledHeaderImage>
                <StyledForm>
                    <StyledFormGroup>
                        <Button
                            onclick=""
                            label="Publish"
                            position="absolute"
                            top="20px"
                            right="50px"
                        />
                        <StyledLable for="fileInput">
                            Add Header Image
                        </StyledLable>
                        <StyledInput
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                        ></StyledInput>
                        <StyledInput
                            type="text"
                            placeholder="Title"
                            autoFocus={true}
                        ></StyledInput>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <textarea
                            placeholder="Write your post here..."
                            type="text"
                            className="writeText"
                        ></textarea>
                    </StyledFormGroup>
                </StyledForm>
            </StyledWriteArea>
        </>
    );
}
