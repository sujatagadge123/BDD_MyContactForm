package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyContactForm {
	WebDriver driver;
	@Given("User is on login page")
	public void user_is_on_login_page() {
		ChromeOptions Chromeoptions = new ChromeOptions();
		Chromeoptions.addArguments("--remote-allow-origins=*");
		driver = new ChromeDriver(Chromeoptions);
		driver.manage().window().maximize();
		driver.get("https://www.mycontactform.com/");
	   
	}
	

	@When("User enters {string} and {string} and click on login button")
	public void user_enters_and_and_click_on_login_button(String string, String string2) throws InterruptedException {
		driver.findElement(By.id("user")).sendKeys("sen1");
		Thread.sleep(2000);

		driver.findElement(By.name("pass")).sendKeys("Asdf@1234");
		Thread.sleep(2000);
		driver.findElement(By.name("btnSubmit")).click();
		Thread.sleep(2000);
	   
	}
	@Then("Validate if login is sucessful")
	public void validate_if_login_is_sucessful() throws InterruptedException {
		Thread.sleep(2000);
		String actResult = driver.findElement(By.xpath("//*[@id=\"user_bar\"]/h5")).getText();
		Assert.assertEquals("Welcome sen1", actResult);

	}

	@Then("User logs off")
	public void user_logs_off() throws InterruptedException {
		driver.findElement(By.linkText("Logout")).click();
		Thread.sleep(2000);
		driver.close();
	   
	}
}
