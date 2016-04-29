<%@ Page Language="C#" AutoEventWireup="true" 
    CodeFile="Default.aspx.cs" Inherits="_Default" 
   MasterPageFile="~/MasterPage.master" %>


<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container">
        <h1 class="text-center">demo site</h1>
        <div class="row">
            <div class="col-md-2" style="background-color:black;"><img src="images/logo.svg" /></div>
            <div class="col-md-10">&nbsp;</div>
        </div>
        <input type="text" id="txtName" />
        <input type="text" id="txtPassword" />
        <input type="submit" value="Submit" />
     </div>
</asp:Content>

