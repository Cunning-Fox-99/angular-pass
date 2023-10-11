import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password';
  password = ''
  type = 'empty';

  getValue(event: any) {
    const text = event.target.value
    // console.log(text.length)

    if (text.length === 0) {
      this.type = 'empty'
    } else if (text.length < 8) {
      this.type = 'weak'
    } else {
     const validate = [true, false, false] // String, number, symbol
      const arr = text.split('')

      arr.forEach((item:any) => {
        if (+item) {
          validate[1] = true
        }
        else if (['!', '@', '#', '$', '&', '*', '%'].find(sym => sym === item)) {
          validate[2] = true
        } else if (String(item)) {
          validate[0] = true
        } else {
          validate[1] = false
          validate[2] = false
        }
      })

      if (+text) {
        validate[0] = false
      }

      const isValidate:any = []

      validate.forEach((val:any) => {
        if (val) {
          isValidate.push(val)
        }
      })

      if (isValidate.length === 1) {
          this.type = 'easy'
      } else if (isValidate.length === 2) {
        this.type = 'medium'
      } else if (isValidate.length === 3) {
        this.type = 'strong'
      }

      console.log('Password: ' + text + ' Type: ' + this.type)

    }

    this.password = text
    return (event.target as HTMLInputElement).value;
  }
}
