import { ChangeEvent, useState } from "react"
import * as Style from "./CheckButton.style"

type CheckButtonProps = {
    isDone : boolean
}

const CheckButton = ({ isDone }: CheckButtonProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(isDone);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }

    return (
        <Style.checkButtonContainer>
            <Style.CheckButtonCheckBox checked={isChecked}>
                <Style.CheckButtonHiddenButton type="checkbox" onChange={onChange} checked={isChecked} />
            </Style.CheckButtonCheckBox>
            <label>
                휴식게이지 : {}
            </label>
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
