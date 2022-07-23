interface CheckButtonProps {
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string | null;
  }

import { ChangeEvent, useState } from "react"
import * as Style from "./CheckButton.style"

const CheckButton = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }

    return (
        <Style.checkButtonContainer>
            <Style.CheckButtonCheckBox checked={isChecked}>
                <Style.CheckButtonHiddenButton type="checkbox" onChange={onChange} checked={isChecked} />
            </Style.CheckButtonCheckBox>
            <Style.checkButtonLabel>
                <Style.CheckButtonHiddenButton type="checkbox" onChange={onChange} checked={isChecked} />
                {isChecked ? "해야되요!" : "클리어!"}
            </Style.checkButtonLabel>
        </Style.checkButtonContainer>
    )
}

export default CheckButton;

{/* <div class="item">
    <div class="checkbox-rect">
        <input type="checkbox" id="checkbox-rect1" name="check">
        <label for="checkbox-rect1">Check one</label>
    </div>
</div> */}
