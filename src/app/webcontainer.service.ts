import { Injectable } from '@angular/core';
import { WebContainer } from '@webcontainer/api';

@Injectable({
    providedIn: 'root',
})
export class WebContainerService {
    private webContainerPromise: Promise<WebContainer>;

    async boot(): Promise<WebContainer> {
        let webContainer: WebContainer;
        if (!this.webContainerPromise) {
            this.webContainerPromise = WebContainer.boot();
        }
        console.log('Webcontainer booting ...');
        webContainer = await this.webContainerPromise;
        const process = await webContainer.spawn('node', ['-V']);
        process.output.pipeTo(
            new WritableStream({
                write(chunk) {
                    console.log(chunk);
                },
            })
        );
        return await this.webContainerPromise;
    }
}
