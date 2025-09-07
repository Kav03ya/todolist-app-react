import Button from '@mui/material/Button';
export default function ActionButton({text, onClicking, variant, color}){
    return(
        <div>
            <Button variant={variant} size="small" color={color} onClick={onClicking} >{text}</Button>
        </div>
    )
}