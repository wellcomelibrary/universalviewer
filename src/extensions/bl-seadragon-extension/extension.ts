
import coreExtension = require("../uv-seadragon-extension/extension");
import IBLSeadragonExtension = require("./iBLSeadragonExtension");
import IBLSeadragonProvider = require("./iBLSeadragonProvider");
import IProvider = require("../../modules/uv-shared-module/iProvider");
import shell = require("../../modules/uv-shared-module/shell");
import header = require("../../modules/uv-pagingheaderpanel-module/pagingHeaderPanel");
import left = require("../../modules/uv-treeviewleftpanel-module/treeViewLeftPanel");
import center = require("../../modules/uv-seadragoncenterpanel-module/seadragonCenterPanel");
import right = require("../../modules/uv-moreinforightpanel-module/moreInfoRightPanel");
import footer = require("../../modules/bl-footerpanel-module/footerPanel");
import help = require("../../modules/uv-dialogues-module/helpDialogue");
import embed = require("../../extensions/uv-seadragon-extension/embedDialogue");
import settingsDialogue = require("../../extensions/uv-seadragon-extension/settingsDialogue");
import externalContentDialogue = require("../../modules/uv-dialogues-module/externalContentDialogue");
import utils = require("../../utils");

export class Extension extends coreExtension.Extension implements IBLSeadragonExtension{

    constructor(provider: IProvider) {
        super(provider);
    }

    create(): void {
        super.create();

        $.subscribe(footer.FooterPanel.DOWNLOAD, (e) => {
            var downloadUri = this.provider.config.modules.externalContentDialogue.options.downloadUri;
            var infoUri = (<IBLSeadragonProvider>this.provider).getImageUri(this.provider.getCanvasByIndex(this.provider.canvasIndex));

            var uri = downloadUri + "?info=" + infoUri;

            $.publish(externalContentDialogue.ExternalContentDialogue.SHOW_EXTERNALCONTENT_DIALOGUE, [{
                uri: uri
            }]);
        });
    }

    createModules(): void{
        this.headerPanel = new header.PagingHeaderPanel(shell.Shell.$headerPanel);

        if (this.isLeftPanelEnabled()){
            this.leftPanel = new left.TreeViewLeftPanel(shell.Shell.$leftPanel);
        }

        this.centerPanel = new center.SeadragonCenterPanel(shell.Shell.$centerPanel);

        if (this.isRightPanelEnabled()){
            this.rightPanel = new right.MoreInfoRightPanel(shell.Shell.$rightPanel);
        }

        this.footerPanel = new footer.FooterPanel(shell.Shell.$footerPanel);

        this.$helpDialogue = $('<div class="overlay help"></div>');
        shell.Shell.$overlays.append(this.$helpDialogue);
        this.helpDialogue = new help.HelpDialogue(this.$helpDialogue);

        this.$embedDialogue = $('<div class="overlay embed"></div>');
        shell.Shell.$overlays.append(this.$embedDialogue);
        this.embedDialogue = new embed.EmbedDialogue(this.$embedDialogue);

        this.$settingsDialogue = $('<div class="overlay settings"></div>');
        shell.Shell.$overlays.append(this.$settingsDialogue);
        this.settingsDialogue = new settingsDialogue.SettingsDialogue(this.$settingsDialogue);

        this.$externalContentDialogue = $('<div class="overlay externalContent"></div>');
        shell.Shell.$overlays.append(this.$externalContentDialogue);
        this.externalContentDialogue = new externalContentDialogue.ExternalContentDialogue(this.$externalContentDialogue);

        if (this.isLeftPanelEnabled()){
            this.leftPanel.init();
        }

        if (this.isRightPanelEnabled()){
            this.rightPanel.init();
        }
    }
}