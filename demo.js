import System;
import System.Windows.Forms;
import System.Drawing;
import Accessibility;
 
 
class RunningSystemCommands extends Form {

        /*
        * Global variables for application
        * Goodwish Matyila(c) Bdgroup Pty Ltd
        * */

        var MyPanel :Panel = new Panel(); //top panel
        var MyRenderPanel :Panel = new Panel(); //button panel
        var AboutBtn: Button = new Button();
        var Logo:PictureBox = new PictureBox();
        var lbl: Label = new Label();
        var UthingoLogo:PictureBox = new PictureBox();
        var HollyWoodLogo:PictureBox = new PictureBox();
        var UkWoodLogo:PictureBox = new PictureBox();

        /*
        * Top Generator buttons 
        */
        var Pick_2 :Button = new Button();
        var Pick_3 :Button = new Button();
        var Pick_6 :Button = new Button();
        var PickHotBall :Button = new Button();
     
    public function RunningSystemCommands(){
        this.Text= "Lucky 6 | Office: +27 (084) 790-8653 BDGroup(Pty)Ltd (c) 2016 | Reg: 2016/135921/07 |Tax Number: 9174400227";
        this.ClientSize= new System.Drawing.Size(800,600);
        this.StartPosition= FormStartPosition.CenterScreen;
        this.MaximizeBox = false;
        this.MinimizeBox = false;
        this.AutoScroll = false;
       
        UthingoLogoLuckySix(); // uthingo logo 
        
        HollyWoodLogoLuckySix();// hollywood logo

        UkLogoLuckySix(); //uk logo

        LogoLuckySix(); //render logo
 
        TopPanelLayer(); //render panel
        
        AboutCompanyDetails(); //render company details

        CompanyData(); //render company top right information

        RenderPickButtons(); //render pick buttons

        RenderButtonPanel(); //render panel

       
    }
  
        public function AboutEventHandler(sender, e: EventArgs){
            var CompanyInformation: String;
            CompanyInformation = "Company: Bdgroup Pty Ltd\nTel:(084)790-8653\nRegistration:2016/135921/07\nWebsite: www.bdgroup.co.za";
            MessageBox.Show(CompanyInformation);
        }

        public function CompanyData(){
            
            lbl.Location = new Point(450,80);
            lbl.Text = "Generate Lucky Numbers with our software\nIncrease your chances of winning!!";
            lbl.Size = new System.Drawing.Size(400,200);
            Controls.Add(lbl);
        }

        public function RenderPickButtons(){
             /* 
             Pick 2 number generator button            
            */

            Pick_2.Size = new System.Drawing.Size(100,50);
            Pick_2.Text = "Quick Pick 2";
            Pick_2.Name = "QuicK Pick Lucky 2";
            Pick_2.Location = new Point(40,300);
            Controls.Add(Pick_2);
        
            /* 
             Pick 3 number generator button            
            */
            Pick_3.Size = new System.Drawing.Size(100,50);
            Pick_3.Text = "Quick Pick 3";
            Pick_3.Name = "Quick Pick Lucky 3";
            Pick_3.Location = new Point(150,300);
            Controls.Add(Pick_3);
            /* 
             Pick 6 number generator button            
            */
            Pick_6.Size = new System.Drawing.Size(100,50);
            Pick_6.Text = "Quick Pick 6";
            Pick_6.Name = "Quick Pick Lucky 6";
            Pick_6.Location = new Point(260,300);
            Controls.Add(Pick_6);

            /* 
             Pick Hot Ball number generator button            
            */
          
            PickHotBall.Size = new System.Drawing.Size(100,50);
            PickHotBall.Text = "Lucky Hot Ball";
            PickHotBall.Name = "Quick Pick Lucky Hot Ball";
            PickHotBall.Location = new Point(370,300);
            Controls.Add(PickHotBall);

            return this;
        }

        public function LogoLuckySix(){
            //logo for software lucky 6 asset 
            Logo.Size = new System.Drawing.Size(400,150);
            Logo.BorderStyle = "Fixed3D";
            Logo.TabStop = false;
            Logo.Location = new Point(0,0);
            Logo.ImageLocation = "asset_a.hcx";
            Controls.Add(Logo);
            return Logo;
        }

        public function TopPanelLayer(){
                //top panel
            MyPanel.Size = new System.Drawing.Size(800,50);
            MyPanel.BorderStyle = "Fixed3D";
            MyPanel.Name = "This is a panel";
            Controls.Add(MyPanel);
            return MyPanel;
        }

        public function AboutCompanyDetails(){
 
            AboutBtn.Size = new System.Drawing.Size(100,35);
            AboutBtn.Location = new Point(680,10);
            AboutBtn.Text = "About";
            //attach event
            AboutBtn.add_Click(AboutEventHandler);
            //attach controller
            MyPanel.Controls.Add(AboutBtn);
        }
        public function RenderButtonPanel(){
            MyRenderPanel.Size = new System.Drawing.Size(800,90);
            MyRenderPanel.Location = new Point(0,280);
            MyRenderPanel.BorderStyle = "Fixed3D";
            MyRenderPanel.Name = "This is a panel";
           
            Controls.Add(MyRenderPanel);
            return MyRenderPanel;
        }

       
            public function UthingoLogoLuckySix(){
                //logo for software lucky 6 asset 
                UthingoLogo.Size = new System.Drawing.Size(210,150);
                UthingoLogo.TabStop = false;
                UthingoLogo.Location = new Point(10,380);
                UthingoLogo.ImageLocation = "asset_b.hcx";
                Controls.Add(UthingoLogo);
                return UthingoLogo;
            }
            public function HollyWoodLogoLuckySix(){
                //logo for software lucky 6 asset 
                HollyWoodLogo.Size = new System.Drawing.Size(300,150);
                HollyWoodLogo.TabStop = false;
                HollyWoodLogo.Location = new Point(240,380);
                HollyWoodLogo.ImageLocation = "asset_c.hcx";
                Controls.Add(HollyWoodLogo);
                return HollyWoodLogo;
            }
            public function UkLogoLuckySix(){
                //logo for software lucky 6 asset 
                UkWoodLogo.Size = new System.Drawing.Size(300,150);
                UkWoodLogo.TabStop = false;
                UkWoodLogo.Location = new Point(550,380);
                UkWoodLogo.ImageLocation = "asset_d.hcx";
                Controls.Add(UkWoodLogo);
                return UkWoodLogo;
            }
        
}
 
Application.Run(new RunningSystemCommands);