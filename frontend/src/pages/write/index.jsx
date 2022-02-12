import './styles';
import {
    StyledForm,
    StyledFormGroup,
    StyledInput,
    StyledLable,
    StyledWriteArea,
} from './styles';

export default function write() {
    return (
        <>
            <StyledWriteArea>
                <StyledForm>
                    <StyledFormGroup>
                        <StyledLable for="fileInput">Add file</StyledLable>
                        <StyledInput
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                        ></StyledInput>
                        <StyledInput
                            type="text"
                            placeholder="Title"
                        ></StyledInput>
                    </StyledFormGroup>
                </StyledForm>
            </StyledWriteArea>
        </>
    );
}
