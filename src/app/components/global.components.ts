////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class GlobalComponents {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private toastCtrl: ToastController) {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    async toast(message: string, type: string, position, duration: number, button: boolean = false, buttonText: string = '')
    {
        const toast = await this.toastCtrl.create(
            {
                message: message,
                duration: duration,
                position: position,
                cssClass: 'st-' + type,
                showCloseButton: button,
                closeButtonText: buttonText
            });

        toast.present();
    }
}
