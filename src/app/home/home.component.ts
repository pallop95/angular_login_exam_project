import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { RequestTypeService } from '@app/_services/requestType.service';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    requestTypeList?: Observable<any>;
  
    requestTypeStr: any = '';

    constructor(
      private accountService: AccountService,
      private requestTypeService: RequestTypeService
    ) {
        this.user = this.accountService.userValue;
    }

    // constructor(private uploadService: FileUploadService) { }

    ngOnInit(): void {
      // this.requestTypeList = this.requestTypeService.getJudgeTypeConstList(null);
      this.requestTypeService.getJudgeTypeConstList(null)
        .pipe(first())
                .subscribe(x => {
                    // this.f.firstName.setValue(x.firstName);
                    // this.f.lastName.setValue(x.lastName);
                    // this.f.username.setValue(x.username);
                  console.log('requestType return', x)
                  this.requestTypeStr = JSON.stringify(x);
                  });
      // console.log('requestTypeList', this.requestTypeList);
    }

    // selectFile(event: any): void {
    //   this.selectedFiles = event.target.files;
    // }

    // upload(): void {
    //   this.progress = 0;

    //   if (this.selectedFiles) {
    //     const file: File | null = this.selectedFiles.item(0);

    //     if (file) {
    //       this.currentFile = file;

    //       this.uploadService.upload(this.currentFile).subscribe(
    //         (event: any) => {
    //           if (event.type === HttpEventType.UploadProgress) {
    //             this.progress = Math.round(100 * event.loaded / event.total);
    //           } else if (event instanceof HttpResponse) {
    //             console.log('event', event)
    //             this.message = event.body.message;
    //             this.fileInfos = this.uploadService.getFiles();
    //           }
    //         },
    //         (err: any) => {
    //           console.log(err);
    //           this.progress = 0;

    //           if (err.error && err.error.message) {
    //             this.message = err.error.message;
    //           } else {
    //             this.message = 'Could not upload the file!';
    //           }

    //           this.currentFile = undefined;
    //         });

    //     }

    //     this.selectedFiles = undefined;
    //   }
    // }
}