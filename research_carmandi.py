import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import sys

BASE_URL = "https://carmandi.pk"
VISITED = set()
URLS_FOUND = set()

def fetch_sitemap():
    """Attempts to fetch and parse sitemap.xml"""
    sitemap_url = urljoin(BASE_URL, "sitemap.xml")
    print(f"[*] Checking {sitemap_url}...")
    try:
        response = requests.get(sitemap_url, timeout=10)
        if response.status_code == 200:
            print("[+] Sitemap found!")
            # Simple parsing for URLs
            soup = BeautifulSoup(response.content, 'xml') 
            locs = soup.find_all('loc')
            for loc in locs:
                URLS_FOUND.add(loc.text.strip())
            print(f"[+] Found {len(locs)} URLs in sitemap.")
            return True
    except Exception as e:
        print(f"[-] Error parsing sitemap: {e}")
    return False

def crawl_page(url):
    """Crawls a single page to find internal navigation links"""
    if url in VISITED:
        return
    VISITED.add(url)
    
    print(f"[*] Crawling {url}...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code != 200:
            print(f"[-] Failed to fetch {url} (Status: {response.status_code})")
            return

        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all links
        links = soup.find_all('a', href=True)
        for link in links:
            href = link['href']
            full_url = urljoin(url, href)
            parsed = urlparse(full_url)
            
            # Filter for internal links only
            if parsed.netloc == urlparse(BASE_URL).netloc:
                # Remove query params and fragments for cleaner URL list
                clean_url = full_url.split('#')[0].split('?')[0]
                if clean_url.endswith('/'):
                    clean_url = clean_url[:-1]
                
                URLS_FOUND.add(clean_url)

    except Exception as e:
        print(f"[-] Error crawling {url}: {e}")

def main():
    print("=== CarMandi.pk Deep Research ===")
    
    # 1. Try Sitemap
    has_sitemap = fetch_sitemap()
    
    # 2. Crawl Homepage to find navigation links (even if sitemap exists, to catch non-indexed pages)
    crawl_page(BASE_URL)
    
    # 3. Output Results
    print("\n" + "="*50)
    print("DISCOVERED URLS & SLUGS")
    print("="*50)
    
    sorted_urls = sorted(list(URLS_FOUND))
    
    categories = {
        "Main Pages": [],
        "Auth": [],
        "Auctions": [],
        "Info/Static": [],
        "Other": []
    }
    
    for url in sorted_urls:
        slug = url.replace(BASE_URL, "")
        if not slug: slug = "/"
        
        if slug in ["/", "/about", "/contact", "/contact-us", "/faqs", "/how-to-buy", "/how-to-sell", "/how-to-bid", "/inspection"]:
            categories["Main Pages"].append(slug)
        elif "login" in slug or "register" in slug or "signin" in slug or "signup" in slug:
            categories["Auth"].append(slug)
        elif "auction" in slug or "car-for-sale" in slug:
            categories["Auctions"].append(slug)
        elif "terms" in slug or "privacy" in slug or "policy" in slug:
            categories["Info/Static"].append(slug)
        else:
            categories["Other"].append(slug)

    for cat, slugs in categories.items():
        if slugs:
            print(f"\n--- {cat} ---")
            for s in slugs:
                print(s)

    print("\n" + "="*50)
    print(f"Total Unique URLs Found: {len(URLS_FOUND)}")

if __name__ == "__main__":
    main()
