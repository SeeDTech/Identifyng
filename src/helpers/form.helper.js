
var PhoneNumber = require( 'awesome-phonenumber' );

export const validatePhone = (newText) => {
    const phoneValue = newText;
    // this.setState({PhoneNumber:phoneValue})
    const pn = new PhoneNumber(phoneValue,  );
    const pa = pn.toJSON( );
    JSON.stringify( pa, null, 4 );
    if (pa.valid === true &&
        pa.possible === true &&
        pa.possibility === "is-possible") {
      return({
          phoneValue,
        isValid: true
      });
    } else {
      return ({
        isValid: phoneValue,
      })
    }
}