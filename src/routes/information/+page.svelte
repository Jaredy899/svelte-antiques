<script>
  import Layout from '$lib/components/Layout.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AddressLink from '$lib/components/AddressLink.svelte';
</script>

<Layout title="Information - Abingdon Antiques">
  <Header />
  
  <main class="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">Information</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Hours Information -->
        <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
          <h2 class="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Store Hours</h2>
          <div class="space-y-4">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Monday - Saturday</p>
              <p class="text-gray-600 dark:text-gray-300">10:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Sunday</p>
              <p class="text-gray-600 dark:text-gray-300">1:00 PM - 4:00 PM</p>
            </div>
          </div>
          
          <h3 class="text-xl font-serif font-bold mt-8 mb-4 text-gray-900 dark:text-white">Holiday Schedule</h3>
          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-300">We are closed on the following holidays:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>🎆 New Year's Day</li>
              <li>🐰 Easter Sunday</li>
              <li>🎇 Independence Day</li>
              <li>🦃 Thanksgiving Day</li>
              <li>🎄 Christmas Eve</li>
              <li>🎅 Christmas Day</li>
            </ul>
            <p class="text-gray-600 dark:text-gray-300 italic">We may have reduced hours on days adjacent to holidays. Please call ahead to confirm.</p>
          </div>
        </div>
        
        <!-- Location Information -->
        <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
          <h2 class="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Our Location</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Address:</h3>
              <div class="text-gray-600 dark:text-gray-300">
                <AddressLink>
                  <span>227 West Main Street</span>
                  <br />
                  <span>Abingdon, VA 24210</span>
                </AddressLink>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Phone:</h3>
              <div class="text-gray-600 dark:text-gray-300">
                <a 
                  href="tel:276-477-1515" 
                  class="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  276-477-1515
                </a>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Email:</h3>
              <div class="text-gray-600 dark:text-gray-300 overflow-x-auto">
                <a 
                href="mailto:abingdonantiquesandmore@gmail.com" 
                class="location-email text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                abingdonantiquesandmore@gmail.com
              </a>
              </div>
            </div>
            <div class="mt-6">
              <h3 class="font-medium text-gray-900 dark:text-white mb-2">Directions:</h3>
              <p class="text-gray-600 dark:text-gray-300">We are located in the heart of historic Abingdon, Virginia, on West Main Street, across the street from <a href="https://abingdoncommons.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Abingdon Commons</a>.</p>
            </div>
            <div class="mt-6">
              <h3 class="font-medium text-gray-900 dark:text-white mb-2">Parking:</h3>
              <p class="text-gray-600 dark:text-gray-300">Free parking is available on the street and in nearby public lots.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-12 max-w-6xl mx-auto">
        <h2 class="text-2xl font-serif font-bold mb-6 text-center text-gray-900 dark:text-white">Find Us</h2>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-colors duration-200">
          <div class="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.835434509374!2d-81.97732168480109!3d36.70993598010572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88549183d6d8f777%3A0x5d08d6275db3b865!2s227%20W%20Main%20St%2C%20Abingdon%2C%20VA%2024210!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen={true}
              loading="lazy"
              title="Abingdon Antiques and More Location Map"
              class="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-12 max-w-6xl mx-auto">
        <section class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors duration-200">
          <h2 class="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">What types of items do you sell?</h3>
              <p class="text-gray-600 dark:text-gray-300">We offer antiques and collectibles including furniture, jewelry, glassware, pottery, and more with constantly changing inventory.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Do you buy antiques?</h3>
              <p class="text-gray-600 dark:text-gray-300">We may purchase quality items that fit our inventory. <a href="mailto:abingdonantiquesandmore@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">Contact us</a> to discuss.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Do you offer appraisals?</h3>
              <p class="text-gray-600 dark:text-gray-300">Yes, our experienced vendors provide appraisals on select items. <a href="tel:276-477-1515" class="text-blue-600 dark:text-blue-400 hover:underline">Call us</a> to arrange an appointment.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">How can I become a vendor?</h3>
              <p class="text-gray-600 dark:text-gray-300">We welcome vendors specializing in quality antiques. <a href="mailto:abingdonantiquesandmore@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">Email us</a> to discuss spaces and requirements.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

  <Footer />
</Layout> 

<style>
/* Mobile-first: Default styles for screens up to 460px wide (inclusive) */
.location-email {
  font-size: 0.75rem; /* The smaller size */
  line-height: 1rem;
}

/* For screens wider than 420px */
@media screen and (min-width: 420px) {
  .location-email {
    font-size: 1rem; /* Adjust to your desired larger size */
    line-height: 1.5rem; /* Adjust to your desired larger line height */
  }
}
</style>