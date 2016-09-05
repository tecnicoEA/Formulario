import {Component} from "@angular/core";
import {NavController , Alert} from 'ionic-angular';
import {Principal} from '../principal/principal';
import {FORM_DIRECTIVES, FormBuilder,  FormGroup, Validators, AbstractControl} from '@angular/forms';
import {CustomValidators} from '../validators/CustomValidators';
import {Http} from '@angular/http';


var Mi_String: string;
Mi_String='';
var respuesta: string;
respuesta='';


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [FORM_DIRECTIVES]
})
export class HomePage {

    authForm: FormGroup;
	username: AbstractControl;
	password: AbstractControl;
    
    
    
  constructor(private navController: NavController , private fb: FormBuilder, private http: Http) {
    this.navController=navController;
    this.http=http;
    
        this.authForm = fb.group({  
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4), CustomValidators.checkFirstCharacterValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4), CustomValidators.checkFirstCharacterValidator])]
        });
 
        this.username = this.authForm.controls['username'];     
        this.password = this.authForm.controls['password'];  
        
    }
	
    onSubmit(value: string): void { 
        if(this.authForm.valid) {
            console.log('Submitted value: ', value);
        }
    } 
    
    goToPrincipal(){
                            console.log(this.username.value);
                            console.log(this.password.value);
        /*
        Mi_String=this.username.value+'_'+this.password.value;
        this.http.post("http://192.168.1.100:8080/post", Mi_String)
        .subscribe(data => {
                respuesta=data.json()
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
        
        this.navController.setRoot(Principal, {
            param1: Mi_String
        });
        */
            
    }
    
   
    
}
