import {Group, Input, FormInputLable} from './form-input.style.jsx';

const FormInput = ({lable, ...otherProps}) => {
    return (
        <Group>
            <Input { ...otherProps }></Input>
            {lable && ( <FormInputLable shrink = {otherProps.value.length}>{ lable }
                </FormInputLable>
                )}
            
        </Group>
    )
}

export default FormInput;