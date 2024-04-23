import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebContainerService } from './webcontainer.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    webContainerService: WebContainerService = inject(WebContainerService);

    ngOnInit(): void {
        this.webContainerService.boot();
    }
}
